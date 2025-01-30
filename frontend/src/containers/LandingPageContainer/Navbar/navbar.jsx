import { useState } from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { LogoRv } from '../../../assets';
import { motion } from 'framer-motion';
import { IoIosGlobe } from "react-icons/io";
import { Dialog, DialogContent, DialogContentText } from '@mui/material';
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { Drawer } from '@mui/material';
import { useTranslation } from 'react-i18next';

const drawerStyle = {
    width: "275px",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: "275px", // Adjust the width as needed
        backgroundColor: "#f2f2f2", // Drawer background color
        border: "none", // Remove the border
        color: "#fff", // Text color
        "& h1": {
            fontSize: "24px", // Adjust the font size as needed
            margin: "20px", // Adjust the margin as needed
        },
    },
}

export default function Navbar() {

    const { t, i18n: { changeLanguage, language } } = useTranslation();

    const [SelectedLanguage, setSelectedLanguage] = useState(language);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const [openDrawer, setOpenDrawer] = useState(false);
    const handleClickOpenDrawer = () => {
        setOpenDrawer(true);
    };
    const handleCloseDrawer = () => setOpenDrawer(false);

    const handleSelectedLanguage = (language) => {
        setSelectedLanguage(language);
        changeLanguage(language);
        setOpen(false);
    }

    const linkNames = {
        'home': t('navbar.home'),
        'works': t('navbar.works'),
        'services': t('navbar.services'),
        'location': t('navbar.location'),
        'contact': t('navbar.contact')
    }

    return (
        <>
            <nav className='w-full flex fixed justify-between items-center bg-white py-3 font-montserrat z-50 shadow-lg'>
                <div className='flex justify-start items-start px-[16px] md:pl-[96px] '>
                    <Link className='text-white text-2xl font-semibold no-underline' to={'/'}>
                        <img src={LogoRv} alt='Logo' className='w-20' />
                    </Link>
                </div>
                <div className='w-full hidden md:flex justify-center items-center gap-5'>
                    {
                        !location.pathname.includes('/modulo/') && Object.keys(linkNames).map((key, index) => {
                            return (
                                <ScrollLink
                                    key={index} to={key} smooth={true} offset={-50} duration={500}
                                    className={`scroll-link text-black no-underline font-base text-lg my-1 cursor-pointer`}
                                >
                                    <motion.div
                                        className="px-1 relative"
                                    >
                                        {linkNames[key]}
                                        <motion.span
                                            className="underline"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: '100%' }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                </ScrollLink>
                            )
                        })
                    }
                </div>
                <div className='hidden md:flex pr-[96px]'>
                    <motion.button
                        onClick={() => { handleClickOpen(); }}
                        className='flex items-center gap-2 font-normal'
                    >
                        <h1>
                            {SelectedLanguage.toUpperCase()}
                        </h1>
                        <IoIosGlobe className='text-3xl cursor-pointer font' />
                    </motion.button>
                </div>
                <div className='w-full flex justify-end items-center px-4 md:hidden'>
                    <FaBars className='text-[#06082B] text-3xl cursor-pointer' onClick={handleClickOpenDrawer} />
                    <Drawer
                        anchor='right'
                        open={openDrawer}
                        onClose={handleCloseDrawer}
                        sx={drawerStyle}
                    >
                        <div className='w-full flex items-end justify-end py-2 px-2'>
                            <IoClose className='text-black w-10 h-10 cursor-pointer' onClick={handleCloseDrawer} />
                        </div>
                        <div className='w-full flex flex-col pl-10 gap-4'>
                            {
                                !location.pathname.includes('/modulo/') && Object.keys(linkNames).map((key, index) => {
                                    return (
                                        <ScrollLink
                                            key={index}
                                            className={`scroll-link text-black no-underline font-normal text-lg my-1 cursor-pointer`}
                                            to={key}
                                            smooth={true}
                                            offset={-50}
                                            duration={500}
                                            onClick={handleCloseDrawer}
                                        >
                                            {linkNames[key]}
                                        </ScrollLink>
                                    )
                                }
                                )
                            }
                        </div>
                        <div className='w-full flex pt-4 pl-10 text-black'>
                            <motion.button
                                onClick={() => { handleClickOpen(); }}
                                className='flex justify-start gap-2 items-center font-normal'
                            >
                                <p className='text-xl'>
                                    {SelectedLanguage.toUpperCase()}
                                </p>
                                <IoIosGlobe className='text-3xl cursor-pointer font' />
                            </motion.button>
                        </div>
                    </Drawer>
                </div>
            </nav>
            <Dialog
                fullWidth maxWidth="xs" open={open} onClose={handleClose}
                aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText>
                        <div className='w-full flex flex-col font-montserrat items-center gap-4'>
                            <h1 className='w-full flex justify-center text-[#6dbbff] text-2xl font-semibold'>
                                {t('selectLanguage')}
                            </h1>
                            <div className='w-full flex justify-evenly items-center gap-2 text-black'>
                                <motion.button
                                    layout
                                    initial={{ backgroundColor: 'transparent' }}
                                    animate={{
                                        backgroundColor: SelectedLanguage === 'fr' ? '#6dbbff' : 'transparent',
                                        color: SelectedLanguage === 'fr' ? 'white' : '#6dbbff'
                                    }}
                                    className={`p-2 h-full font-semibold rounded-lg`}
                                    onClick={() => handleSelectedLanguage('fr')}
                                >
                                    <h1>
                                        Français
                                    </h1>
                                </motion.button>
                                <motion.button
                                    layout
                                    initial={{ backgroundColor: 'transparent' }}
                                    animate={{
                                        backgroundColor: SelectedLanguage === 'nl' ? '#6dbbff' : 'transparent',
                                        color: SelectedLanguage === 'nl' ? 'white' : '#6dbbff'
                                    }}
                                    className={`p-2 h-full font-semibold rounded-lg`}
                                    onClick={() => handleSelectedLanguage('nl')}
                                >
                                    <h1>
                                        Nederlands
                                    </h1>
                                </motion.button>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}