import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProgressBar from 'react-native-progress-step-bar';
import LinearGradient from 'react-native-linear-gradient';

export default function ProgressBars() {
  const [currentStep, setCurrentStep] = useState(0);
  const handlePrevStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep - 1);
  }, []);

  const handleNextStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep + 1);
  }, []);

  const CustomizableFilledBar = useMemo(
    () => (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ width: 325, height: 10 }}
      />
    ),
    []
  );
  const CustomizableDot = useMemo(
    () => (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ width: 20, height: 20, borderRadius: 20 }}
      />
    ),
    []
  );
  return (
    <View
      style={{
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
        <ProgressBar
          steps={3}
          dotDiameter={20}
          width={300}
          height={10}
          currentStep={currentStep}
          stepToStepAnimationDuration={1000}
          filledBarContainerStyle={{ borderRadius: 10 }}
          backgroundBarStyle={{ borderRadius: 10, backgroundColor: '#777777' }}
          withDots={true}
          CustomizedFilledBar={CustomizableFilledBar}
          CustomizableDot={CustomizableDot}
        />






      {/* <View
        style={{
          flexDirection: 'row',
          width: 400,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}
      >
        <TouchableOpacity
          onPress={handlePrevStep}
          style={{ backgroundColor: 'green', marginRight: 30 }}
        >
          <Text>PrevStep</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNextStep}
          style={{ backgroundColor: 'green' }}
        >
          <Text>NextStep</Text>
        </TouchableOpacity>
      </View>  */}
    </View>
  );
}