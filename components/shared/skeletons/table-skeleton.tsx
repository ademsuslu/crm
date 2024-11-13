import { Skeleton } from "@/components/ui/skeleton";

const TableSkeleton = () => {
  return (
    <div>
      <div className="gap-2">
        {/* Başlık için skeleton */}
        <div  className="flex p-4 bg-gray-400">
          <Skeleton className="h-[20px] mr-4 w-[20%]" />
          <Skeleton className="h-[20px] mr-4 w-[20%]" />
          <Skeleton className="h-[20px] mr-4 w-[20%]" />
          <Skeleton className="h-[20px] mr-4 w-[20%]" />
          <Skeleton className="h-[20px] w-[20%]" />
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
