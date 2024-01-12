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
import {
  Form,
  Link,
  LoaderFunctionArgs,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { File, Scan, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CodeScanner } from "@/components/code-scanner";
import { useState } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const search = new URL(request.url).searchParams.get("search") || "";
  return fetchOrganizations({ search });
}

export default function Organizations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [scannerOpen, setScannerOpen] = useState(false);
  const { data } = useOrganizations({
    search: searchParams.get("search") || "",
  });

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
        <div className="mt-4 flex gap-2">
          <Form method="GET" action="/organizations">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                name="search"
                type="search"
                placeholder="Search"
                className="pl-8 lg:w-[400px] w-full"
                defaultValue={searchParams.get("search") || ""}
              />
            </div>
          </Form>
          <Dialog open={scannerOpen} onOpenChange={setScannerOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Scan className="w-4 h-4 mr-2" />
                Scan Code
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Scan Organization Code</DialogTitle>
                <DialogDescription>Scan QR Code or Barcode</DialogDescription>
              </DialogHeader>
              <CodeScanner
                onResult={(result) => {
                  setSearchParams((prev) => {
                    prev.set("search", result);
                    return prev;
                  });
                  setScannerOpen(false);
                }}
                onError={(error) => {
                  console.log(error);
                }}
              />
            </DialogContent>
          </Dialog>
        </div>
        <div className="mt-2 border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>
                  <span className="sr-only">Action</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data.length === 0 && (
                <TableRow className="hover:bg-background">
                  <TableCell colSpan={4} className="py-8 text-center">
                    <div className="flex flex-col gap-6 items-center">
                      <div className="flex flex-col items-center gap-1">
                        <File className="w-10 h-10 text-muted-foreground" />
                        <span className="font-semibold text-muted-foreground">
                          No data
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span>Search: "{searchParams.get("search")}"</span>
                        {searchParams.get("search") ? (
                          <Form method="GET" action="/organizations">
                            <Button
                              type="submit"
                              size="sm"
                              variant="secondary"
                              className="h-7"
                            >
                              Clear Search
                            </Button>
                          </Form>
                        ) : null}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
              {data?.data.map((organization) => (
                <TableRow key={organization.id}>
                  <TableCell>{organization.code}</TableCell>
                  <TableCell>{organization.name}</TableCell>
                  <TableCell>{organization.type?.replace("_", " ")}</TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
