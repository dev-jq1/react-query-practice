import { FC } from 'react';

interface DogsProps {
  dogs: string[];
}

const Dogs: FC<DogsProps> = ({ dogs }) => {
  return (
    <div className='dogs-wrap'>
      {dogs.map((url) => {
        return (
          <div key={url} className='dog'>
            <img src={url} alt='dog' className='dogs-image' />
          </div>
        );
      })}
    </div>
  );
};
export default Dogs;
