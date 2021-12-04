import React,{useState,useEffect} from 'react';
import './Detail.css';
// import Personal from './DetailImg/detailpersonal.svg';
// import Education from './DetailImg/detaileducation.svg';

function Details(){
    var course=["Degree","Btech","Mtech","Bca","Mca","Mba","BS-MS","Diploma","Mbbs"];
    var list=["Degree","Btech","Mtech","Mba","BS-MS","Diploma"];
    var branch=[];
    branch[0]=[];
     branch["Btech"]=[
        "Acoustic engineering",
        "Aeronautical",
        "Aeronautical/astronautical",
        "Aerospace engineering",
        "Aircraft maintenance",
        "Agriculture",
        "Agriculture and food engineering",
        "Agriculture and irrigation engineering",
        "Agriinformatics",
        "Apparel production management",
        "Applied engineering",
        "Applied electronics",
        "Applied electronics and instrumentation",
        "Applied mechanics",
        "Architecture engineering",
        "Artificial engineering",
        "Artificial intelligence and machine learning",
        "Atmospheric sciences",
        "Audio engineering",
        "Automation and robotics",
        "Automobile engineering",
        "Automotive design",
        "Automotive engineering",
        "Autotronics",
        "Avionics engineering",
        "Aviation engineering",
        "Big data analysis",
        "Bio informatics",
        "Bio technology",
        "Biochemical",
        "Biological sciences and bio engineering",
        "Biologically inspired system science",
        "Biomedical engineering",
        "Biomedical instrumentation",
        "Bioprocess technology",
        "Bioscience and bioengineering",
        "Biotechnology/bio technical",
        "Block chain technology",
        "Carpet and textile technology",
        "Ceramic technology",
        "Ceramics and cement technology",
        "Chemical",
        "Chemical and electrochemical engineering",
        "Chemical engineering",
        "Chemical science and technology",
        "Civil engineering",
        "Cloud technology",
        "Computer and information science",
        "Computer science engineering",
        "Construction engineering and management",
        "Cyber security",
        "Dairy technology",
        "Data science",
        "Design and manufacturing",
        "Design engineering",
        "Dyestuff and intermediates technology",
        "Earth sciences",
        "Electrical and computer engineering",
        "Electrical and electronics",
        "Electrical engineering",
        "Electrical engineering(power and automation)",
        "Electronics",
        "Electronics and communication engineering",
        "Electronics and instrumentation",
        "Electronics and media technology",
        "Electronics and nanotechnology",
        "Electronics and telecommunication",
        "Electronics control system",
        "Electronics instrumentation and control",
        "Energy engineering",
        "Energy science and engineering",
        "Energy systems engineering",
        "Engineering design",
        "Engineering physics",
        "Engineering science",
        "Enterprise information systems",
        "Environmental engineering",
        "Environmental engineering and water resources",
        "Fashion and lifestyle design",
        "Fibre technology",
        "Fibres and textile processing technology",
        "Fire protection engineering",
        "Food engineering",
        "Food packaging technology",
        "Food process engineering",
        "Food science and technology",
        "Food technology",
        "Food technology and biochemical",
        "Footwear engineering",
        "Gas and applied petroleum",
        "Genetic engineering",
        "Geo informatics engineering",
        "Geo sciences engineering",
        "Geological engineering",
        "Geomatics engineering",
        "Horticulture",
        "Industrial and production",
        "Industrial automation",
        "Industrial biotechnology",
        "Industrial design",
        "Industrial engineering",
        "Industrial engineering and management",
        "Industrial microbiology",
        "Information and communication technology",
        "Information security",
        "Information technology",
        "Infrastructure engineering",
        "Instrumentation",
        "Instrumentation and control",
        "Jute and fibre technology",
        "Leather technology",
        "Mainframe technology",
        "Manmade fibre technology",
        "Manufacturing",
        "Manufacturing process and automation",
        "Manufacturing technology",
        "Marine",
        "Material science engineering",
        "Mathematics and computing",
        "Mechanical and automobile engineering",
        "Mechanical and industrial",
        "Mechanical engineering",
        "Mechatronics",
        "Medical electronics",
        "Metallurgical and materials",
        "Metallurgical engineering",
        "Microelectronics engineering",
        "Mineral engineering",
        "Minerals and metallurgical",
        "Mining",
        "Mining machinery engineering",
        "Mobile application and information security",
        "Molecular and cellular engineering",
        "Motor sports engineering",
        "Nanotechnology",
        "Nanotechnology and robotics",
        "Naval architecture",
        "Naval architecture and ocean engineering",
        "Naval architecture and ship building",
        "Naval engineering",
        "Nuclear engineering",
        "Nuclear science and technology",
        "Ocean and marine",
        "Oil and paint technology",
        "Oil and gas informatics",
        "Oil technology",
        "Oleo chemicals and surfactants",
        "Open source and open standards",
        "Optics and optoelectronics",
        "Packaging technology",
        "Paint technology",
        "Paper technology",
        "Petrochemical",
        "Petroleum engineering",
        "Petroleum engineering and technology",
        "Petroleum refining and petrochemicals",
        "Pharmaceutical technology",
        "Pharmaceuticals chemistry and technology",
        "Physical sciences",
        "Planning engineering",
        "Plastic and polymer",
        "Plastic technology",
        "Polymer engineering",
        "Polymer science and chemical technology",
        "Polymer science and technology",
        "Polymer technology",
        "Poultry production engineering",
        "Power electronics",
        "Power engineering",
        "Power system engineering",
        "Print and media technology",
        "Printing graphics and packaging",
        "Printing technology",
        "Production",
        "Production and industrial engineering",
        "Professional communication",
        "Pulp and paper technology",
        "Radio frequency and microwave",
        "Robotics",
        "Rubber and plastic technology",
        "Rubber technology",
        "Safety and fire",
        "Silk technology",
        "Software engineering",
        "Soil and water conservation",
        "Solar and alternative technology",
        "Space technology",
        "Structural engineering",
        "Sugar and alcohol technology",
        "Sugar technology",
        "Surface coating technology",
        "System science engineering",
        "Telecom informatics",
        "Telecommunications",
        "Textile chemistry",
        "Textile engineering",
        "Thermal engineering",
        "Tool engineering",
        "TV",
        "Upstream and applied petroleum",
        "Urban and regional planning",
        "Water resources engineering"
        ];
        branch["Mtech"]=[
            "Advanced manufacturing technology",
            "AERONAUTICAL ENGINEERING",
            "AEROSPACE ENGINEERING",
            "AGRICULTURAL ENGINEERING",
            "ALLOY TECHNOLOGY",
            "AQUA CULTURAL ENGINEERING",
            "ARTIFICIAL INTELLIGENCE &MACHINE LEARNING",
            "AUTOMOBILE ENGINEERING",
            "BIOMEDICAL ENGINEERING",
            "BIOTECHNOLOGY",
            "CHEMICAL ENGINEERING",
            "CIRCUITS AND MICRO CONTROLLERS",
            "CIVIL ENGINEERING",
            "COMMUNICATION SYSTEMS",
            "COMPUTER AIDED DESIGN",
            "COMPUTER INTEGRATED MANUFACTURING",
            "COMPUTER SCIENCE ENGINEERING",
            "CONSTRUCTION TECHNOLOGY",
            "CONTROL SYSTEMS",
            "CYBER SECURITY",
            "DESIGN & MANUFACTURING",
            "DIGITAL SYSTEM AND SIGNAL PROCESSING",
            "Earthquake",
            "ELECTRICAL DEVICES AND POWER SYSTEMS",
            "ELECTRICAL ENGINEERING",
            "ELECTRONICS & COMMUNICATION",
            "ELECTRONICS & ELECTRICAL ENGINEERING",
            "EMBEDDED SYSTEMS",
            "ENERGY SYSTEM ENGINEERING",
            "ENGINEERING PHYSICS",
            "FLUID DYNAMICS",
            "FOOD TECHNOLOGY",
            "Foundry and forge technology",
            "Fuel  Engineering",
            "GEOTECHNICAL ENGINEERING",
            "INDUSTRIAL ELECTRICAL SYSTEMS",
            "INDUSTRIAL ENGINEERING",
            "INFORMATION TECHNOLOGY",
            "Manufacturing science and engineering",
            "MECHANICAL ENGINEERING",
            "MECHATRONICS",
            "Oils oleochemicals and surfactants",
            "Plastic Engineering",
            "POWER ENGINEERING",
            "ROBOTICS",
            "SIGNAL PROCESSING",
            "SOFTWARE ENGINEERING",
            "VLSI TECHNOLOGY AND DESIGN"
            ]
            branch["Degree"]=["MPC ",
            "CPZ",
            "CDZ",
            "MECs",
            "MPCs",
            "MDC",
            "BBC ",
            "ASE",
            "MSCs",
            "HEP",
            "MPE",
            "BBZ",
            "HEC",
            "ASCs",
            "B-Com ",
            "B-Com general",
            "BA"];
            branch["Mba"]=["MBA in General Management ",
            "MBA in Marketing ",
            "MBA in Human Resource Management ",
            "MBA in Consulting ",
            "MBA in Entrepreneurship ",
            "MBA in Finance ",
            "MBA in Operations Management ",
            "MBA in Management Information Systems ",
            "MBA in Global Management ",
            "MBA in Engineering Management ",
            "MBA in Technology Management ",
            "MBA in Finance",
            "MBA in Information Technology (IT)",
            "MBA in Logistics Management",
            "MBA in Business Management",
            "MBA in Rural Management",
            "MBA in Health Care Management",
            "MBA in Event Management",
            "MBA in Business Analytics"];
            branch["Diploma"]=["Diploma automobile",
            " Diploma in aeronautical engineering",
            " Diploma in aerospace engineering",
            " Diploma in agriculture engineering",
            " Diploma in art and craft",
            " Diploma in biotechnology",
            " Diploma in BLT",
            " Diploma in ceramic",
            " Diploma in chemical engineering",
            " Diploma in civil engineering",
            " Diploma in computer science",
            "Diploma in diary technology and engineering",
            " Diploma in electrical",
            " Diploma in electronics and telecommunication",
            "Diploma in electronics communication",
            " Diploma in fashion engineering",
            " Diploma in food processing and technology",
            " Diploma in genetic engineering",
            " Diploma in information technology",
            " Diploma in instrumentation and control",
            " Diploma in interior decoration",
            " Diploma in mechanical engineering",
            " Diploma in metallurgy engineering",
            " Diploma in metallurgy engineering",
            " Diploma in mining",
            " Diploma in petroleum engineering",
            " Diploma in textile engineering","Diploma in nutrition & dietetics",
            " Diploma in radiology",
            " Diploma in medical nursing assistant",
            " Diploma in dialysis",
            " Diploma in physiotherapy",
            " Diploma in medical lab technician",
            " Diploma in medical record technology",
            " Diploma in sanitary inspector",
            " Diploma in audiology and speech therapy",
            " Diploma in x-ray technology"];
        const[state,setstate]=useState({selectedbranch:0})  ;
        const [states,setstates]=useState({detailtagname:"Personal Details"})  ;
        var count=0;
        function getbranch(event){
            for(var i=0;i<list.length;i++){
                if(event.target.value===list[i]){
                count++;
                }
            }
            if(count>0){
            setstate({selectedbranch:event.target.value});
            document.getElementById("branchlist").style.display="";
            }
            else{
                document.getElementById("branchlist").style.display="none"; 
            }
           
        }
        function personal(){
            document.getElementById('personal').style.display="block";
            document.getElementById('education').style.display="none";
        }
        function education(){
            document.getElementById('personal').style.display="none";
            document.getElementById('education').style.display="block";
            setstates({detailtagname:"Education Details"});
        }
        function previous(){
            document.getElementById('personal').style.display="block";
            document.getElementById('education').style.display="none";
            setstates({detailtagname:"Personal Details"})
        }
    return(
        <div className="maindetail">
            <div className="text-center">
          <div>
              {/* <img src={Personal} id="persoaldetailimg" className="mx-5"></img><img src={Education} id="educationdetailimg" className="mx-5"></img> */}
              </div>
        <div className="my-3 tag" >{states.detailtagname}</div></div>
<div className="detail card" id="personal" style={{width:'50%',backgroundImage:'url(/detailback.svg)'}}>
<div className="detailsform  card-body">
<form className="card-text">
    <div className="form-group">
    <label for="firstname">Title</label>
    <input  type="text" name="title" id="title" className="form-control" required />
    </div>
    <div className="form-group">
    <label>First Name</label>
    <input type="text" name="firstname" className="form-control" required />
    </div>
    <div className="form-group">
    <label>Last Name</label>
    <input type="text" name="lastname" className="form-control" required />
    </div>
    <div className="form-group">
    <label>Mobile</label>
    <input type="number" name="phone" className="form-control" required />
    </div>
    <div className="form-group">
    <label>Blood Group</label>
    <input type="text" name="blood" className="form-control" required />
    </div>
    <div className="form-group">
    <label>Will you try to donate blood in emergency situation ?</label><br></br>
    <input type="text" name="donate" className="form-control" required />
    </div>
    <div className="form-group">
    <label>Home Location</label>
    <input type="text" name="location" className="form-control" required />
    </div>
   <div className="ml-5 text-center"><button className="btn px-5"  onClick={education} value="Next">Next</button></div>
    </form> </div></div>
    <div className="detail card" id="education"  style={{width:'50%',backgroundImage:'url(/detailback.svg)',paddingBottom:'100px',display:'none'}}>
<div className="detailsform  card-body my-5">
    <form className="card-text">
    <div className="form-group">
    <label>Degree</label>
    <input onChange={getbranch} list="degree" className="form-control"></input><datalist id="degree">{course.map((courses)=>(<option value={courses} id={courses}>{courses}</option>))}</datalist></div>
    <div className="form-group">
   <label>College Name</label>
    <input type="text" name="collegename" className="form-control" required /></div>
    <div id="branchlist" style={{display:"none"}} className="branchinput">
    <label>Branch Name</label>
    <input className="form-control" list="branch"></input><datalist id="branch">{branch[state.selectedbranch].map((branchs)=>(<option value={branchs} id={branchs}>{branchs}</option>))}</datalist></div>    
    <div className="form-group">
        <br></br>
    <label>Start year</label>
    <input type="date"  /></div>
    <div className="ml-5 "><button className="btn px-5  mx-5 start" value="Previous" onClick={previous}>Previous</button><button className="btn px-5 mx-5"  type="submit" value="Next">Next</button></div>
   </form>
    </div></div></div>
    
    );
}
export default Details;
