
import { IconLogout } from '@tabler/icons-react';


function Logout() {
    const handleOnclick = ()=>{
        console.log("handleOnclick")
        localStorage.removeItem('user-details');
        window.location.reload()
    }
  return (
    <div style={{ color:"#9ad9ff", display:"flex", alignItems:"flex-end"}}>
        
      <IconLogout onClick={handleOnclick} style={{cursor:"pointer"}}/>
    </div>
  )
}

export default Logout
