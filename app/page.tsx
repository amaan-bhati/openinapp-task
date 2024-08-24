import FileUpload from './components/FileUpload';
export default function Home() {
  return (
    <>
   
      <h1 className='m-2 text-2xl font-semibold'>upload csv</h1>
    
      <div className="flex items-center justify-center h-screen w-full bg-white">
        
        <div className="w-full">
          <div className="m-auto  w-[430px] h-[330px] p-4 ">
            
            <FileUpload />
          
            
          </div>
        </div>
      </div>
    </>
  );
}
