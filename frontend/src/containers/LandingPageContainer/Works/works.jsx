import * as React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll';
import { Box } from '@mui/material';
import { BAPlaceholder, BGNettoyage, Escaliers } from '../../../assets';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CustomDots = ({ steps, activeStep, handleStepChange }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            {Array.from({ length: steps }).map((_, index) => (
                <Box
                    key={index}
                    sx={{
                        width: 8, height: 8, borderRadius: '50%', margin: '0 4px', cursor: 'pointer',
                        backgroundColor: activeStep === index ? '#145e9f' : 'grey.400'
                    }}
                    onClick={() => handleStepChange(index)}
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

const images = [
    { id: 1, image: BAPlaceholder },
    { id: 2, image: BGNettoyage },
    { id: 3, image: Escaliers },
    { id: 4, image: BGNettoyage },
    { id: 5, image: BGNettoyage },
    { id: 6, image: BAPlaceholder },
];

const displayWorks = (imgOne, imgTwo) => {
    return (
        <div className="h-[475px] md:h-[700px]relative">
            <ReactCompareSlider
                itemOne={
                    <ReactCompareSliderImage
                        src={imgOne}
                        alt="Image one"
                        className="h-full w-full object-cover rounded-lg"
                    />
                }
                itemTwo={
                    <ReactCompareSliderImage
                        src={imgTwo}
                        alt="Image two"
                        className="h-full w-full object-cover rounded-lg"
                    />
                }
                className="h-full w-full"
            />
        </div>
    );
};

export default function Works() {
    const [activeStep, setActiveStep] = React.useState(0);

    const { t } = useTranslation();

    const handleNext = () => {
        if (activeStep >= images.length - 2) {
            setActiveStep(0);
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 2);
    };

    const handleBack = () => {
        if (activeStep === 0) {
            setActiveStep(images.length - 2);
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 2);
    };

    const handleStepChange = (step) => {
        setActiveStep(step * 2);
    };

    return (
        <div id='works' className="w-full flex flex-col md:flex-row justify-between font-montserrat py-[10px] md:py-[30px] flex-1 tracking-wider">
            <div className='w-full flex justify-center items-center px-4'>
                <div className='w-full flex flex-col gap-[4px] md:gap-[24px] items-center text-center text-pretty'>
                    <h1 className=' text-3xl md:text-5xl py-2 font-semibold'>
                        {t('works.title')}
                    </h1>
                    <p className='py-1'>
                        {t('works.subtitle')}
                    </p>
                    <ScrollLink className='w-full flex justify-center' to="services" smooth={true} offset={-50} duration={500}>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            className='w-3/5 md:w-2/5 mt-2 py-2.5 bg-[#6fbcff] text-white rounded-full'
                        >
                            {t('works.button')}
                        </motion.button>
                    </ScrollLink>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center py-5'>
                <div className='w-full h-full flex justify-between items-center'>
                    <div className=' h-full flex justify-center items-center text-[#1592ff] text-lg'>
                        <motion.button
                            whileHover={{ scale: 0.95 }}
                            className={`flex items-center pr-´2`}
                            onClick={handleBack}
                        >
                            <MdKeyboardArrowLeft className='w-12 h-12' />
                        </motion.button >
                    </div>
                    <div className='w-full'>
                        {displayWorks(images[activeStep].image, images[activeStep + 1].image)}
                    </div>
                    <div className=' h-full flex justify-center items-center text-[#1592ff] text-lg'>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center px-´2`}
                            onClick={handleNext}
                        >
                            <MdKeyboardArrowRight className='w-12 h-12' />
                        </motion.button >
                    </div>
                </div>
                <div className='w-full flex justify-center items-center pt-1'>
                    <CustomDots steps={images.length / 2} activeStep={activeStep / 2} handleStepChange={handleStepChange} color="black" />
                </div>
            </div>
        </div >
    );
}