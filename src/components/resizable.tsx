import './resizable.css';
import { ResizableBox } from 'react-resizable';

interface ResizableProps {
  direction: 'vertical' | 'horizontal';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return (
    <ResizableBox height={300} width={Infinity} resizeHandles={['s']}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
