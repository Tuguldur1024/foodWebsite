export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dessertItems } from "./Utils/MockData";
import { Input } from "./ui";
import { Dot } from "./icons/threedot";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const next = () => {};
export const TableDemo = () => {
  return (
    <div className=" flex flex-col gap-14">
      <div className="w-[1024px] border rounded-2xl">
        <div className="flex justify-between items-center px-6 py-5 ">
          <div className="font-semibold text-xl">Admin dashboard</div>
          <Input
            className="border w-[356px] bg-gray-100"
            type="email"
            placeholder="search"
          />
        </div>
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className=" text-black font-semibold">
                Order name{" "}
              </TableHead>
              <TableHead className=" text-black font-semibold">
                Buyer info
              </TableHead>
              <TableHead className=" text-black font-semibold">
                Payment
              </TableHead>
              <TableHead className="text-left text-black font-semibold">
                Address
              </TableHead>
              <TableHead className="text-left text-black font-semibold">
                Delivery state
              </TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dessertItems.map((item) => (
              <TableRow key={item.price}>
                <TableCell className="font-medium w-[229px] flex gap-2 items-center">
                  <div
                    style={{ backgroundImage: item.imageUrl }}
                    className="w-[40px] h-[40px] bg-cover bg-center rounded-lg"
                  ></div>
                  <p>{item.name}</p>
                </TableCell>
                <TableCell className="w-[140px] text-left ">
                  <div className="font-semibold">{item.price}</div>
                  <div>{item.name}</div>
                </TableCell>
                <TableCell className="w-[229px] text-left flex justify-between content-center ">
                  <div>
                    <div className="font-semibold">{item.price}</div>
                    <div>{item.name}</div>
                  </div>
                  <div className="p-[2px] text-center bg-green-300 w-[44px] h-[24px] rounded-2xl">
                    Paid
                  </div>
                </TableCell>
                <TableCell className="text-left w-[229px]">
                  {item.name}
                </TableCell>
                <TableCell className="text-left w-[127px]">
                  <div className="p-[2px] text-center bg-yellow-200 w-fit h-[24px] rounded-2xl">
                    Progress
                  </div>
                </TableCell>
                <TableCell className="text-left w-[68px]">
                  <Dot />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="border border-x-0 border-b-0 p-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem className="bg-gray-100 rounded-md">
              <PaginationPrevious onClick={previous} href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className="bg-gray-100 rounded-md">
              <PaginationNext onClick={next} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
