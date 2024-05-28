import { useMonitor } from "@/hooks/useMonitor";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import moment from "moment";
export const Monitoring = () => {
    const { logs } = useMonitor();
    
    return <main>
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Log ID</TableHead>
      <TableHead>Log Level</TableHead>
      <TableHead>Log Message</TableHead>
      <TableHead>Req. Method</TableHead>
      <TableHead>Req. Path</TableHead>
      <TableHead>Req. Host</TableHead>
      <TableHead>Req. Timestamp</TableHead>
      <TableHead>Req. User ID</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {logs.sort((a, b) => moment(b.req_timestamp).toDate().getTime() - moment(a.req_timestamp).toDate().getTime()).map((log) => {
        return <TableRow>
        <TableCell className="font-medium">{log.id}</TableCell>
        <TableCell>{log.level}</TableCell>
        <TableCell>{log.message}</TableCell>
        <TableCell>{log.req_method}</TableCell>
        <TableCell>{log.req_path}</TableCell>
        <TableCell>{log.req_host}</TableCell>
        <TableCell>{moment(log.req_timestamp).format("LLL")}</TableCell>
        <TableCell>{log.user_id}</TableCell>
      </TableRow>
    })}
  </TableBody>
</Table>
    </main>
}