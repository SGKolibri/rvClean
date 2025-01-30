import { useRef, useState } from "react";
import { Alert, Fab, Snackbar, TextField } from "@mui/material";
import { IoIosMail } from "react-icons/io";
import { WhatsApp } from '../../../assets/index';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CustomTextField = (props) => {
    return (
        <TextField
            {...props}
            variant="filled"
            InputLabelProps={{
                style: { color: 'white' },
            }}
            InputProps={{
                style: { color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            }}
            sx={{
                '& .MuiFilledInput-underline:after': {
                    borderBottomColor: 'white',
                },
                '& .MuiFilledInput-root': {
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    },
                    '&.Mui-focused': {
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    },
                }
            }}
        />
    );
};

export default function Footer() {

    const { t } = useTranslation();

    const contactNumber = "(62) 9 9504-7887";
    const contactEmail = "contact@rvclean.com";

    const whatsappLink = 'https://wa.me/5562995047887'

    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    // const [sendingEmail, setSendingEmail] = useState(false);

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");

    const SnackAlert = (severity, message) => {
        setSeverity(severity);
        setMessage(message);
        setOpen(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        SnackAlert("info", `${type === 'email' ? "e-mail" : t("contact.number")} ${t("contact.copied")}`);
    }

    const handleSendEmail = async (e) => {
        e.preventDefault();
        console.log(name, email, text);

        if (!name || !email || !text) {
            SnackAlert("info", t("contact.fillAllFields"));
            return;
        }
        clearInputs();
    };

    const clearInputs = () => {
        setName("");
        setEmail("");
        setText("");
        const inputs = document.querySelectorAll('TextField, CustomTextField');
        inputs.forEach(input => input.value = '');
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>

            <footer id="contact" className="w-full h-full flex flex-col pt-2 pb-4 items-center justify-center font-montserrat bg-[#39859D] text-[#f2f2f2] tracking-wider bottom-0">
                <div className="w-full flex flex-col py-4 gap-3 items-center justify-center text-center">
                    <h1 className="text-white font-semibold text-2xl md:text-5xl">
                        {t("contact.title")}
                    </h1>
                    <span className="font-light text-sm md:text-lg px-[20px] md:px-[160px]">
                        {t("contact.subtitle")}
                    </span>
                </div>

                <div className="w-full h-full flex flex-col md:flex-row justify-between text-start pb-8 px-2">

                    <div className="w-full md:w-1/2 flex flex-col gap-3 items-center pl-[0px] md:pl-[85px] pb-[30px] md:pb-[0px]">
                        <h1 className="w-full text-2xl flex font-semibold justify-center text-center md:justify-start select-none">
                            {t("contact.contact")}
                        </h1>
                        <div className="w-full flex flex-col items-center md:items-start gap-3 md:gap-4 text-center">
                            <div className="gap-1 md:gap-2 flex flex-col md:flex-row">
                                <span className="select-none font-semibold">
                                    {t("contact.phoneContact")}:
                                </span>
                                <span className="font-light flex cursor-pointer"
                                    onClick={() => handleCopy(contactNumber)}
                                >
                                    &nbsp;
                                    {contactNumber}
                                </span>
                            </div>
                            <div className="gap-1 md:gap-2 flex flex-col md:flex-row">
                                <span className="select-none font-semibold">
                                    {t("contact.emailContact")}:
                                </span>
                                <span className="font-light flex cursor-pointer justify-center"
                                    onClick={() => handleCopy(contactEmail, 'email')}
                                >
                                    &nbsp;
                                    {contactEmail}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-3 items-center place-content-center">
                        <h1 className="text-2xl flex gap-2 font-semibold select-none">
                            <span className="flex items-center">
                                <IoIosMail className="w-8 h-8 inline text-3xl" />
                            </span>
                            {t("contact.emailContact")}
                        </h1>
                        <form ref={form} className="w-full flex flex-col px-[10px] md:px-[0px] gap-3 items-center justify-center text-[#f2f2f2]">
                            <CustomTextField
                                label={t("contact.name")}
                                id="nome"
                                className="w-full md:w-3/4"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <CustomTextField
                                label={t("contact.email")}
                                id="email"
                                type="email"
                                className="w-full md:w-3/4"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <CustomTextField
                                multiline
                                rows={4}
                                label={t("contact.message")}
                                id="message"
                                className="w-full md:w-3/4"
                                name="text  "
                                onChange={(e) => setText(e.target.value)}
                            />
                            <div className="w-full flex pb-1 justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-3/4 md:w-1/2 h-full py-2 rounded-full bg-white text-black"
                                    onClick={handleSendEmail}
                                >
                                    {t("contact.button2")}
                                </motion.button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="w-full flex px-3 md:px-5 justify-center select-none">
                    <span className="flex">
                        © 2024 RV Clean
                        <span className="hidden md:block">
                            &nbsp;- {t("contact.deservedRights")}
                        </span>
                    </span>
                </div>

                <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="fixed bottom-4 right-4 md:bottom-4 md:right-4 z-50 sm:right-2 sm:bottom-2"
                    onClick={() => window.open(whatsappLink, '_blank')}
                >
                    <Fab
                        size="large"
                        sx={{
                            width: '60px', // Custom width
                            height: '60px', // Custom height
                            '& svg': {
                                fontSize: '3rem', // Adjust icon size
                            },
                        }}
                        // sx={fabGreenStyle}
                        className="bg-[#f2f2f2]"
                    >
                        <img src={WhatsApp} alt="WhatsApp" className="w-10 h-10" />
                    </Fab>
                </motion.div>
            </footer >
        </>
    )
}