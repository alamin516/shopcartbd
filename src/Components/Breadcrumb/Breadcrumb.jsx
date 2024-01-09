import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li className="flex items-center space-x-2">
          <HomeIcon className="w-5 h-5" />
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        </li>
        <li className="flex items-center space-x-2">
          <ChevronRightIcon className="w-5 h-5 text-gray-500" />
          <Link to="/cart" className="text-blue-500 hover:underline">Cart</Link>
        </li>
        <li className="flex items-center space-x-2">
          <ChevronRightIcon className="w-5 h-5 text-gray-500 disabled" />
          <Link to="#" className="text-blue-500 hover:underline">Checkout</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
