import { useGetUserInfoQuery } from '@/libs/redux/api/auth.api';
import { useEffect } from 'react';

const Page = ()=>{
   const {data, isLoading,  isError} = useGetUserInfoQuery();
   useEffect(()=>{
   console.log(data);
   
    
   },[data])
  return(
    <>
    profile
    {/* {isLoading?'loading':data?.name} */}
    </>
    ); 
} 
 export default Page