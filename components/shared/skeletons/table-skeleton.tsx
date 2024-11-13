import { Skeleton } from "@/components/ui/skeleton";

const TableSkeleton = () => {
  return (
    <div>
      <div className="gap-2">
        {/* Başlık için skeleton */}
        <div  className="flex justify-between items-center p-4 rounded">
          <Skeleton  className="h-[20px] mr-4 w-[50%]" />

          <div className="w-full flex items-center justify-end ">
          <Skeleton className="h-[25px] mr-4 w-[25px]  rounded-full" />
          <Skeleton className="h-[20px] w-[20%]" />
          </div>
        </div>
         <div  className="space-x-8 px-4 " >
          <Skeleton className="h-[2px] w-[100%] "/>
         </div>

        {/* Satırların skeletonları */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex p-4">
            <Skeleton className="h-[20px] mr-4 w-[20%]" />
            <Skeleton className="h-[20px] mr-4 w-[20%]" />
            <Skeleton className="h-[20px] mr-4 w-[20%]" />
            <Skeleton className="h-[20px] mr-4 w-[20%]" />
            <Skeleton className="h-[20px] w-[20%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;
