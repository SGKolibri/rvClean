import { Link as ScrollLink } from 'react-scroll';
import { BGNettoyage } from "../../../assets";
import { useTranslation } from "react-i18next";
// import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import './home.css';

// const TextFieldTheme = {
//     '& label.Mui-focused': {
//         color: 'black',
//     },
//     '& .MuiInput-underline:after': {
//         borderBottomColor: 'white',
//     },
//     '& .MuiFilledInput-root': {
//         backgroundColor: '#ffffff',
//         opacity: 0.95,
//         color: 'black',
//         '&:hover': {
//             backgroundColor: '#fff',
//             opacity: 0.95,
//         },
//     },
// }

export default function Home() {

    const { t } = useTranslation()

    // const handleMessage = () => {
    //     alert("Message sent!")
    // }

    return (
        <>
            <div id="home" className="w-full h-full flex pb-5 justify-between items-center text-white bg-fixed bg-cover bg-center tracking-widest font-montserrat" style={{ backgroundImage: `url(${BGNettoyage})` }}>
                <div className="w-full flex flex-col gap-2 justify-center items-center">
                    <div className='w-full flex flex-col pl-[15px] md:pl-[80px] gap-[8px] md:gap-[0px]'>
                        <p className="w-full flex text-2xl">
                            ★★★★★
                        </p>
                        <h1 className="w-full flex py-1 text-7xl font-semibold">
                            RV Clean
                        </h1>
                        <h2 className="w-full flex py-1 text-4xl font-semibold">
                            {t("homepage.subtitle")}
                        </h2>
                        <h3 className="w-full flex py-1 text-lg font-semibold">
                            {t("homepage.subtitle2")}
                        </h3>
                    </div>
                    <ScrollLink className='w-full flex justify-center md:justify-start items-center md:items-start pt-3' to="contact" smooth={true} offset={-50} duration={500}>
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#6dbbff] font-semibold py-3 ml-[0px] md:ml-[80px] px-[80px] tracking-wider rounded-full text-lg"
                        >
                            {t("homepage.button")}
                        </motion.button>
                    </ ScrollLink>
                </div>
                {/* <div className="w-full flex justify-center items-center">
                    <div className="w-3/4 flex justify-center items-center py-5 mt-10 flex-col rounded-3xl bg-white/20 gap-5 shadow-2xl">
                        <div className="w-4/5 flex flex-col items-start">
                            <TextField className="w-full relative z-10" label={t("homepage.name")} variant="filled"
                                sx={TextFieldTheme}
                            />
                        </div>
                        <div className="w-4/5 flex flex-col items-start">
                            <TextField className="w-full relative z-10" label={t("homepage.email")} variant="filled"
                                sx={TextFieldTheme}
                            />
                        </div>
                        <div className="w-4/5 flex flex-col items-start">
                            <TextField className="w-full relative z-10" label={t("homepage.number")} variant="filled"
                                sx={TextFieldTheme}
                            />
                        </div>
                        <div className="w-4/5 flex flex-col items-start">
                            <TextField className="w-full relative z-10" label={t("homepage.message")} variant="filled" multiline rows={4}
                                sx={TextFieldTheme}
                            />
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#6dbbff] py-2.5 px-4 rounded-full text-lg relative z-10"
                            onClick={handleMessage}
                        >
                            {t("homepage.button2")}
                        </motion.button>
                    </div>
                </div> */}
            </div>
        </>
    )
}