import usegetData from "../Hooks/usegetData"
import DataGridDemo from "../UI/DataGrid";
import Logout from "./Logout";
import Page3 from "./Page3";

function Page2() {
  //Custom hook for getting the data
  const datas:any = usegetData();


  return (
    <div style={{display:"flex"}}>
      <div>
        {datas ? (
              <div><DataGridDemo rows={datas}/>
              <div style={{marginTop: 50}}>
              <Page3/>
              </div>
              
              </div>
        ) : (
                <p>Loading...</p>
              )}
      </div>
       <Logout/> 
    </div>

  )
}

export default Page2
