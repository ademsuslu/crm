import crypto from 'crypto'

export interface PaytrIframeResponse {
    status: 'success' | 'failed'
    token?: string
    reason?: string
}

export interface PaytrIframeNotificationResponse {
    merchant_id: string
    status: 'success' | 'failed'
    total_amount: string
    hash: string
    failed_reason_code?: string
    failed_reason_msg?: string
    test_mode?: string
    payment_type: string
    currency: string
    payment_amount: string
    installment_count: string
    merchant_oid: string
}

export const createPaytrToken = async () => {
    try {
        const url = "https://cors-anywhere.herokuapp.com/https://www.paytr.com/odeme/api/get-token"
        const headers = new Headers({
            'content-type': 'application/x-www-form-urlencoded',
        })

        // Fake order
        const order = {
            id: String(String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now()),
            email: 'test@example.com',
            totalPrice: 123,
            firstName: 'John',
            lastName: 'Smith',
            address: "123 Main Street",
            phone: "5555555555",
            ip: "11.22.33.44",
            basket: [
                {
                    title: "Ürün 1", price: 18, quantity: 2
                },
                {
                    title: "Ürün 2", price: 5, quantity: 2
                },
                {
                    title: "Ürün 3", price: 20, quantity: 2
                },
            ]
        }

        // Fake settings
        const settings = {
            paytr: {
                timeout_limit: "5", // kullanıcı kaç dakika içinde ödeme yapmalı, sınırı geçerse ödeme ekranı iptal olur
                test_mode: "1", // canlıda modda olduğumuz için 1 verip test olduğunu gösteriyoruz
                lang: "tr",
                no_installment: "0", // taksit açık mı 0, 1
                max_installment: "0", // taksit  sayısı, 0 otomatik bütün taksitleri aç
                currency: "TL"
            }
        }

        // Body
        const formData = new URLSearchParams()
        const merchantId = "496326"
        const merchantKey = "nzEUKH4y12pt8ny8"
        const merchantSalt = "98TCDN8tqpGU538u"
        formData.append('merchant_id', merchantId)
        formData.append('merchant_key', merchantKey)
        formData.append('merchant_salt', merchantSalt)
        formData.append('email', order.email)
        formData.append('payment_amount', String(order.totalPrice * 100)) // 100 ile çarpıyoruz çünkü kuruş olması gerekiyor
        formData.append('merchant_oid', order.id)
        formData.append('user_name', order.firstName + order.lastName)
        formData.append('user_address', order.address)
        formData.append('user_phone', order.phone)
        // ok ve fail url tamamen kullanıcıyı bilgilendirme amaçlı. herhangi bir backend işlemi yapılmaz
        formData.append('merchant_ok_url', "http://localhost:3000/payment/success")
        formData.append('merchant_fail_url', "http://localhost:3000/payment/unsuccess")
        // basket ürünlerini stringify edip base64 olarak encode ediyoruz
        const basketFormatted = order.basket.map(basket => ([basket.title, basket.price, basket.quantity]))
        const userBasket = Buffer.from(JSON.stringify(basketFormatted)).toString('base64')
        formData.append('user_basket', userBasket)
        formData.append('user_ip', process.env.NODE_ENV !== 'production' ? '0.0.0.0' : order.ip)
        formData.append('timeout_limit', settings.paytr.timeout_limit)
        formData.append('test_mode', settings.paytr.test_mode)
        formData.append('lang', settings.paytr.lang)
        formData.append('no_installment', settings.paytr.no_installment)
        formData.append('max_installment', settings.paytr.max_installment)
        formData.append('currency', settings.paytr.currency)

        // hash oluşturuyoruz güvenlik amacıyla
        const hash = `${formData.get('merchant_id')}${formData.get('user_ip')}${formData.get('merchant_oid')}${formData.get('email')}${formData.get('payment_amount')}${formData.get('user_basket')}${formData.get('no_installment')}${formData.get('max_installment')}${formData.get('currency')}${formData.get('test_mode')}`
        const paytrToken = hash + merchantSalt
        const token = crypto
            .createHmac('sha256', merchantKey)
            .update(paytrToken)
            .digest('base64')
        formData.append('paytr_token', String(token))

        // istek atıyoruz iframe tokenini almak için
        const result = await fetch(url, {
            method: 'POST',
            headers,
            body: formData,
        })

        const data: PaytrIframeResponse = await result.json()

        if (data.status === 'failed' || !data.token) {
            return {
                status: "error",
                message: 'Ödeme sayfası alınamadı'
            }
        }
        return {
            status: 'success',
            data: data.token
        }
    } catch (error) {
        console.log(error)
        return {
            status: "failed",
            message: "Paytr token alınamadı"
        }
    }
}