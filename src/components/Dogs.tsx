import { FC } from 'react';
import Dog from './Dog';

interface DogsProps {
  dogs: string[];
}

const Dogs: FC<DogsProps> = ({ dogs }) => {
  return (
    <div className='dogs-wrap'>
      {dogs.map((url) => {
        return <Dog key={url} url={url} />;
      })}
    </div>
  );
};
export default Dogs;
