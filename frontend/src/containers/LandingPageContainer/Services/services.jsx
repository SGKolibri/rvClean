import { useEffect, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Bureaux, Escaliers, Vitres, Fenetres, BlurryGradientPNG, Cuisines, Garage, Salle, Exterieurs, Terrasse, Facade, CarExterior, CarInterior, Demenagement, Apartment, Chantier } from '../../../assets';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomDots = ({ steps, activeStep, handleStepChange }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            {Array.from({ length: steps }).map((_, index) => (
                <Box
                    key={index}
                    sx={{
                        width: 8, height: 8, borderRadius: '50%', margin: '0 4px', cursor: 'pointer',
                        backgroundColor: activeStep === index ? '#145e9f' : 'white',
                        opacity: activeStep === index ? 1 : 0.8,
                    }}
                    onClick={() => {
                        console.log("INDEX: ", index)
                        handleStepChange(index + 1)
                    }}
                />
            ))}
        </Box>
    );
};

CustomDots.propTypes = {
    steps: PropTypes.number.isRequired,
    activeStep: PropTypes.number.isRequired,
    handleStepChange: PropTypes.func.isRequired,
};


const DisplayServices = (title, subtitle, image) => {
    return (
        <>
            <Card sx={{
                width: 320,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                paddingBottom: 2,
                boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.3)',
            }}>
                <CardMedia
                    component="img"
                    image={image}
                    sx={{ height: 280 }}
                />
                <CardContent
                    sx={{
                        background: 'white',
                        height: 120,
                    }}
                >
                    <div className='w-full flex flex-col justify-center'>
                        <h1 className='text-lg text-black font-medium'>
                            {title}
                        </h1>
                        <p className='text-md text-[#121212]'>
                            {subtitle}
                        </p>
                    </div>
                </CardContent>
                <CardActions sx={{ background: 'white' }} >
                </CardActions>
            </Card>
        </>
    )
}

export default function Services() {
    const { t } = useTranslation();
    const curLanguage = localStorage.getItem('i18nextLng');
    const containerRef = useRef(null);
    const [leftConstraint, setLeftConstraint] = useState(0);
    const isMdOrLarger = useMediaQuery('(min-width: 768px)');

    const services = [
        { id: '1', image: Chantier, title: 'Après chantier', subtitle: 'Nettoyage après travaux, incluant la désinfection des surfaces et l’élimination des déchets.', type: t("services.types", { returnObjects: true })[0] },
        { id: '2', image: Demenagement, title: 'Après déménagement', subtitle: 'Nettoyage complet post-déménagement pour un espace frais et prêt à être occupé.', type: t("services.types", { returnObjects: true })[0] },
        { id: '3', image: Bureaux, title: 'Bureaux', subtitle: 'Nettoyage et entretien professionnel des bureaux et locaux commerciaux.', type: t("services.types", { returnObjects: true })[1] },
        { id: '4', image: Apartment, title: 'Appartements', subtitle: 'Nettoyage approfondi des appartements, incluant le soin des sols et des surfaces.', type: t("services.types", { returnObjects: true })[1] },
        { id: '5', image: Vitres, title: 'Vitres', subtitle: 'Lavage de vitres professionnel pour des fenêtres éclatantes et sans traces.', type: t("services.types", { returnObjects: true })[2] },
        { id: '6', image: Fenetres, title: 'Fenêtres', subtitle: 'Nettoyage méticuleux des fenêtres pour une clarté et brillance maximales.', type: t("services.types", { returnObjects: true })[2] },
        { id: '7', image: Cuisines, title: 'Cuisines', subtitle: 'Désinfection et nettoyage complet des cuisines, y compris des appareils et surfaces.', type: t("services.types", { returnObjects: true })[3] },
        { id: '8', image: Salle, title: 'Salles de bain', subtitle: 'Entretien et nettoyage des salles de bain pour une hygiène irréprochable.', type: t("services.types", { returnObjects: true })[3] },
        { id: '9', image: Exterieurs, title: 'Extérieurs', subtitle: 'Nettoyage extérieur, incluant les terrasses, façades et allées.', type: t("services.types", { returnObjects: true })[4] },
        { id: '10', image: Terrasse, title: 'Terrasse', subtitle: 'Entretien des terrasses pour un espace extérieur propre et accueillant.', type: t("services.types", { returnObjects: true })[4] },
        { id: '11', image: Garage, title: 'Garages', subtitle: 'Nettoyage en profondeur des garages, incluant le soin des sols et des murs.', type: 'Garages' },
        { id: '12', image: Garage, title: 'Garages', subtitle: 'Nettoyage en profondeur des garages, incluant le soin des sols et des murs.', type: 'Garages' },
        { id: '13', image: Escaliers, title: 'Escaliers', subtitle: 'Nettoyage d’escaliers, garantissant une hygiène et sécurité optimales.', type: t("services.types", { returnObjects: true })[6] },
        { id: '14', image: Facade, title: 'Facades', subtitle: 'Nettoyage de façades pour préserver l’apparence et l’intégrité de vos bâtiments.', type: t("services.types", { returnObjects: true })[6] },
        { id: '15', image: CarExterior, title: 'Véhicules', subtitle: 'Nettoyage extérieur des véhicules pour une propreté impeccable.', type: t("services.types", { returnObjects: true })[7] },
        { id: '16', image: CarInterior, title: 'Véhicules', subtitle: 'Nettoyage intérieur des véhicules pour une propreté impeccable.', type: t("services.types", { returnObjects: true })[7] }
    ];

    const [page, setPage] = useState(1);
    const servicesPerPage = isMdOrLarger ? 3 : 1;

    const initialService = curLanguage === 'fr' ? 'Tous' : 'Alle';
    const [selectedService, setSelectedService] = useState(initialService);

    const handleChangeService = (value) => {
        setPage(1);
        setSelectedService(value);
    };

    const handleChange = (value) => {
        setPage(value);
    };

    const filteredServices = selectedService === 'Tous' || selectedService === 'Alle'
        ? services
        : services.filter((service) => service.type.includes(selectedService));

    const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

    const displayedServices = filteredServices.slice(
        (page - 1) * servicesPerPage,
        page * servicesPerPage
    );

    const serviceTypes = t("services.types", { returnObjects: true });

    useEffect(() => {
        console.log("CUR LANG: ", curLanguage)
        setSelectedService(curLanguage === 'fr' ? 'Tous' : 'Alle');
    }, [curLanguage]);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const totalButtonsWidth = serviceTypes.length * 90; // Assuming each button is 82px wide
            setLeftConstraint(-(totalButtonsWidth - containerWidth));
        }
    }, [serviceTypes]);

    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleBack = () => {
        setPage((prevPage) => prevPage - 1);
    };

    return (
        <>
            <div id='services' className="w-full min-h-full flex bg-white font-montserrat tracking-wider">
                <div className={`w-full flex flex-col gap-5`}
                    style={{
                        backgroundImage: `url(${BlurryGradientPNG})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className='w-full flex flex-col justify-center text-white text-center'>
                        <h1 className="text-2xl md:text-5xl mt-5 py-2 text-pretty font-semibold ">
                            {t("services.title")}
                        </h1>
                        <p className='text-lg md:text-lg px-[4px] md:px-[0px] pb-2 text-balance'>
                            {t("services.subtitle")}
                        </p>
                    </div>
                    <div className='w-full flex' ref={containerRef}>
                        <div className='w-full overflow-hidden'>
                            <motion.div
                                viewport={{ once: true }} layout
                                drag={isMdOrLarger ? false : "x"}
                                dragConstraints={{ right: 0, left: leftConstraint }}
                                animate={{
                                    translateX: `0%`,
                                }}
                                className='w-full flex flex-row justify-between gap-2 px-[5px] md:px-[50px] py-[20px] md:py-[10px]'
                            >
                                {
                                    serviceTypes.map((type, index) => (
                                        <motion.button
                                            key={index} layout
                                            initial={{ backgroundColor: 'transparent' }}
                                            animate={{
                                                backgroundColor: selectedService === type ? 'white' : 'transparent',
                                                color: selectedService === type ? '#6dbbff' : 'white'
                                            }}
                                            className={`p-2 h-full flex font-semibold rounded-lg tracking-normal items-center`}
                                            onClick={() => handleChangeService(type)}
                                        >
                                            {type}
                                        </motion.button>
                                    ))
                                }
                            </motion.div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center pt-2 pb-10 items-center overflow-hidden'>
                        <div className='w-[10%] flex justify-center items-center'>
                            <motion.button
                                whileTap={{ scale: 0.97 }}
                                whileHover={{ scale: 1.03 }}
                                disabled={page === 1}
                                className={`flex items-center pr-2 text-white `}
                                onClick={handleBack}
                            >
                                <MdKeyboardArrowLeft className='w-14 h-14'
                                    style={{ opacity: page === 1 ? '0' : '1' }} // Change color based on page
                                />
                            </motion.button >
                        </div>
                        <div className='w-full flex justify-around items-center'>
                            {
                                displayedServices.filter((service) => selectedService === 'Tous' || selectedService === 'Alle' || service.type === selectedService)
                                    .map((object, index) => (
                                        <motion.div
                                            whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} viewport={{ once: true }} exit={{ opacity: 0, x: 100 }}
                                            whileInView={{ x: [-100, 0], opacity: [0.2, 1], transition: { duration: 0.8, ease: "easeInOut" } }}
                                            key={index}
                                            className='shadow-xl'
                                        >
                                            {DisplayServices(object.title, object.subtitle, object.image)}
                                        </motion.div>
                                    ))
                            }
                        </div>
                        <div className='w-[10%] flex justify-center items-center'>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                disabled={page === totalPages}
                                className={`flex items-center pl-2 text-white `}
                                onClick={handleNext}
                            >
                                <MdKeyboardArrowRight className='w-14 h-14'
                                    style={{ opacity: page === totalPages ? '0' : '1' }} // Change color based on page
                                />
                            </motion.button >
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-end pb-4'>
                        <CustomDots steps={totalPages} activeStep={page - 1} handleStepChange={handleChange} />
                    </div>
                </div>
            </div >
        </>
    )
}