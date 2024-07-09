import usegetData from "../Hooks/usegetData"
import DataGridDemo from "../UI/DataGrid";
import Logout from "./Logout";

function Page2() {
  //Custom hook for getting the data
  const datas:any = usegetData();


  return (
    <div style={{display:"flex"}}>
      <div>
        {datas ? (
              <div><DataGridDemo rows={datas}/></div>
        ) : (
                <p>Loading...</p>
              )}
      </div>
       <Logout/> 
    </div>

  )
}

export default Page2
