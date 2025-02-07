import styled from "styled-components";

import fullImg from "../../assets/common/fullimg.png";
function Home() {
  return (
    <>
      <Bgimg></Bgimg>
    </>
  );
}
export default Home;

const Bgimg = styled.div`
  height: 100vh;
  background: #dc1b3b url(${fullImg}) center/80% no-repeat;
`;
