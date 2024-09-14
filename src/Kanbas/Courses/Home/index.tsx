import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <table id="wd-home">
      <tbody> {/* 使用 <tbody> 包裹 <tr> */}
        <tr>
          {/* 第三列：Modules */}
          <td valign="top">
            <Modules />
          </td>
          {/* 第四列：Course Status */}
          <td valign="top">
            <CourseStatus />
          </td>
        </tr>
      </tbody>
    </table>
  );
}