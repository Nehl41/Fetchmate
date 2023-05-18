import Card from "../Card/Card";
import Nehal from '../../assets/Image/nehal.png'
import Swayam from '../../assets/Image/swayam.jpg'
export default () => {
  return (
    <div className="developers-wrapper" style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"100%"}}>
      <Card cardImage={Nehal} cardDescription="She is the technical lead,front-end developer and UI/UX Designer of Fetchmate" cardTitle="Nehal Patidar" linkedInLink="https://www.linkedin.com/in/nehal-patidar/"></Card>
      <Card cardImage={Swayam} cardDescription="Swayam Handles the Back-end Development and its Integration with front-end" cardTitle="Swayam Prajapat" linkedInLink="https://www.linkedin.com/in/swayam-prajapat/"></Card>
      <Card cardImage="https://media.licdn.com/dms/image/D5635AQGLrku47-LkkA/profile-framedphoto-shrink_800_800/0/1673964278687?e=1681552800&v=beta&t=HAiVxJK3pfYdaDdGpj_g5x1Hs4IpM_Z0UB8Q63leMco" cardDescription="Akshada has contributed with fake profile detection and Documentation" cardTitle="Akshada Baiwar" linkedInLink="https://www.linkedin.com/in/akshada-baiwar-8a137b20b/"></Card>
    </div>
  );
};
