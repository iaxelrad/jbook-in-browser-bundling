import { ResizableBox } from 'react-resizable';

interface ResizableProps {
  direction: 'vertical' | 'horizontal';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return <div>{children}</div>;
};

export default Resizable;
