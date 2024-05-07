import React from 'react'
import Marquee from "react-fast-marquee";

const mySkills = [
  "https://ik.imagekit.io/ggwj7fapg/icon/react_E3zbnS3eZ.png?updatedAt=1715059857125",
  "https://ik.imagekit.io/ggwj7fapg/icon/socket.io_0x5QJXjK6.jpeg?updatedAt=1715059857168",
  "https://ik.imagekit.io/ggwj7fapg/icon/stripe_ycF13ayWo.png?updatedAt=1715059857445",
  "https://ik.imagekit.io/ggwj7fapg/icon/Swagger_i45o0tXWY6.jpeg?updatedAt=1715059857521",
  "https://ik.imagekit.io/ggwj7fapg/icon/tailwind_GD44Q0HxR.jpg?updatedAt=1715059857552",
  "https://ik.imagekit.io/ggwj7fapg/icon/ci4_MWpVIvIJ4.jpeg?updatedAt=1715059850910",
  "https://ik.imagekit.io/ggwj7fapg/icon/ExpressJs_4G3-NVNPz.jpg?updatedAt=1715059850994",
  "https://ik.imagekit.io/ggwj7fapg/icon/css_-GpOoWuAg.png?updatedAt=1715059851183",
  "https://ik.imagekit.io/ggwj7fapg/icon/laravel_dsOTchmLaD.jpeg?updatedAt=1715059851021",
  "https://ik.imagekit.io/ggwj7fapg/icon/bostrap_Ze9sAfNl0.png?updatedAt=1715059851103",
]
const mySkills2 = [
  "https://ik.imagekit.io/ggwj7fapg/icon/flowbit_w8X9LF4kQs.png?updatedAt=1715059851190",
  "https://ik.imagekit.io/ggwj7fapg/icon/go_xNddfnpAxe.jpeg?updatedAt=1715059851233",
  "https://ik.imagekit.io/ggwj7fapg/icon/daisyUi_qJbXyE6X0.png?updatedAt=1715059851370",
  "https://ik.imagekit.io/ggwj7fapg/icon/js_JVQkaP1w0T.jpeg?updatedAt=1715059851290",
  "https://ik.imagekit.io/ggwj7fapg/icon/html5_VDyWqWIl-N.png?updatedAt=1715059851369",
  "https://ik.imagekit.io/ggwj7fapg/icon/mantine_zicHWP8eM.png?updatedAt=1715059853982",
  "https://ik.imagekit.io/ggwj7fapg/icon/mysql_OS48nZTfx.png?updatedAt=1715059854027",
  "https://ik.imagekit.io/ggwj7fapg/icon/mongo_nVTQHfMIQ.png?updatedAt=1715059854036",
  "https://ik.imagekit.io/ggwj7fapg/icon/next-js_bNgfTmZnZ.svg?updatedAt=1715059854303",
  "https://ik.imagekit.io/ggwj7fapg/icon/php_dhi3iyiIF.png?updatedAt=1715059854367",
]
const mySkills3 = [
  "https://ik.imagekit.io/ggwj7fapg/icon/Postgreess_w5IR21-3oZ.svg?updatedAt=1715059854544",
  "https://ik.imagekit.io/ggwj7fapg/icon/rabbitmq_gPhU9fRIvh.png?updatedAt=1715059854485",
  "https://ik.imagekit.io/ggwj7fapg/icon/prisma_ZYwNRSOzFj.avif?updatedAt=1715059854663",
  "https://ik.imagekit.io/ggwj7fapg/icon/node_8jLhXpDvGp.jpeg?updatedAt=1715059854746",
  "https://ik.imagekit.io/ggwj7fapg/icon/Nginx_8CsifZXk59.jpg?updatedAt=1715059854780",
  "https://ik.imagekit.io/ggwj7fapg/icon/sequelize_N6-2KRs78.jpeg?updatedAt=1715059857069",
  "https://ik.imagekit.io/ggwj7fapg/icon/vb_dYMvzzYMm.png?updatedAt=1715061049217",
  "https://ik.imagekit.io/ggwj7fapg/icon/saas_u_bE271w1.jpeg?updatedAt=1715061048990",
  "https://ik.imagekit.io/ggwj7fapg/icon/redux_Vs3Ddpmcx.jpg?updatedAt=1715061048910",
  "https://ik.imagekit.io/ggwj7fapg/icon/typescript_-OVQazfCv.png?updatedAt=1715061048567"
]
const DivMarguee = ({src}) =>{
  return(
    <div className='w-[40vw] h-[10vh] lg:w-[11vw] me-4 lg:h-[11vh] bg-slate-300 dark:bg-white'>
      <img className='w-full h-full' src={src} />
    </div>
  )
}
const Skils = () => {
  return (
    <div className="bg-slate-800 pt-36 pb-28 dark:bg-slate-300">
      <div class="container">
        <div class="w-full px-4">
          <div class="mx-auto mb-16 text-center">
            <h4 class="mb-2 text-lg font-semibold text-primary">Skills</h4>
            <h2 class="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl">Programming Skills</h2>
          </div>
        </div>
      </div>
      <div className='w-full px-1 lg:px-4 lg:w-[90vw] mx-auto'>
        <div>
          <div className='mb-6'>
            <Marquee speed={60} >
              {mySkills.map((mySkill)=>(
                <DivMarguee src={mySkill}/>
              ))}
            </Marquee>
          </div>
          <div className='mb-6'>
            <Marquee direction="right" speed={60}>
              {mySkills2.map((mySkill)=>(
                <DivMarguee src={mySkill}/>
              ))}
            </Marquee>
          </div>
          <div>
            <Marquee speed={65}>
              {mySkills3.map((mySkill)=>(
                <DivMarguee src={mySkill}/>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skils