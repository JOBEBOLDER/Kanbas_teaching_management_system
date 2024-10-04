import CourseStatus from './Status';
import Modules from '../Modules';

export default function Home() {
  return (
    <div className="d-flex justify-content-between">
      <div className="flex-grow-1">
        {/* 模块内容显示在左侧 */}
        <Modules />
      </div>

      <div className="ms-4">
        {/* CourseStatus 位于页面的右侧 */}
        <CourseStatus />
      </div>
    </div>
  );
}