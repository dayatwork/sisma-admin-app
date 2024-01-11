import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  fetchOrganizations,
  useOrganizations,
} from "../../../services/organization/get-organizations";
import { Form, Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export async function loader() {
  return fetchOrganizations();
}

export default function Organizations() {
  const { data } = useOrganizations();

  return (
    <>
      <Outlet />
      <div className="px-6 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Organizations</h1>
          <Button asChild>
            <Link to="create">Create</Link>
          </Button>
        </div>
        <div className="mt-4 flex gap-4">
          <Form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 lg:w-[400px] w-full"
              />
            </div>
          </Form>
        </div>
        <div className="mt-2 border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="sr-only">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data.map((organization) => (
                <TableRow key={organization.id}>
                  <TableCell className="font-medium">
                    {organization.name}
                  </TableCell>
                  <TableCell>{organization.type}</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
