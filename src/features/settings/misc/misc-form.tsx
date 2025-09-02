import Departments from './Depts';
import Categories from './ExpCategory';
import Roles from './Roles';
import Service from './Services';

const MiscForm = () => {
  return (
    <div className="space-y-6">
      <Roles />
      <Departments />
      <Service />
      <Categories />
    </div>
  );
};

export default MiscForm;
