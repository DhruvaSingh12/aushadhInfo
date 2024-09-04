import Header from '@/components/Header';
import Box from '@/components/Box';
import General from './components/General';
import Conditions from './components/Conditions';

export const revalidate = 0;

export default async function Home() {
  return (
    <div className="h-full w-full rounded-lg">
      <Box>
        <Header children={undefined} />
      </Box>
      <Box className="bg-white h-[calc(100%-75px)]">
        <div className="mt-2 h-full grid grid-cols-2 gap-2">
          <div className="flex flex-col overflow-y-auto gap-2">
            <General />
            <Conditions />            
          </div>
        </div>
      </Box>
    </div>
  );
}
