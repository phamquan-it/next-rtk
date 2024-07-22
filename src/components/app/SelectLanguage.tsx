import { LockFilled, VideoCameraTwoTone } from "@ant-design/icons";
import { Dropdown, Image } from "antd";
import { icons } from "antd/es/image/PreviewGroup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SelectLanguage = ()=>{
   const router = useRouter()
    const switchLocale = (otherLocale: string)=>{
        router.push(router,'', {locale:otherLocale})
    }
  const items = [
    { label: <span className="ms-1" onClick={()=>{
        switchLocale("en")
    }}>English</span>, key: 'item-1', icon:<Image width={20} src="en.png" alt="" /> }, // 菜单项务必填写 key
    { label: <span className="ms-1" onClick={()=>{
        switchLocale("de")
    }}>Tiếng việt</span>, key: 'item-2',icon:<Image width={20} src="vi.png" alt="" />},
  ];
  const [flagIcon,setFlagIcon] = useState(router.locale+".png")
//   alert(router.locale)
  useEffect(()=>{
    if(router.locale == "en"){
        setFlagIcon("en.png")
    }else
    setFlagIcon("vi.png")
  },  [router.locale])
  return (
    <Dropdown menu={{ items }}  placement="bottomRight">
        <Image preview={false}
            width={20}
            src={flagIcon} alt="" className="shadow rounded-full"/>
    </Dropdown>
  );
} 
 export default SelectLanguage