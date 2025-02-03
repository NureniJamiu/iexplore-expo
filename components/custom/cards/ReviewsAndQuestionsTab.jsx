import { Box } from "@/components/ui/box";

import { Text } from "@/components/ui/text";
import * as React from 'react';
import ClubReviews from './ClubReviews';
import ClubQuestionsAndAnswers from './ClubQuestionsAndAnswers';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const ReviewsAndQuestionsTab = ({questionModalSetter}) => {
  const [activeTab, setActiveTab] = React.useState('reviews');

  const renderContent = () => {
    switch (activeTab) {
      case 'reviews':
        return <ClubReviews />;
      case 'questionsandanswers':
        return <ClubQuestionsAndAnswers modalState={questionModalSetter} />;
      default:
        return null;
    }
  };

  return (
    <Box style={{flex: 1}}>
      <Box
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <TouchableOpacity onPress={() => setActiveTab('reviews')}>
          <Text
            style={{fontWeight: activeTab === 'reviews' ? 'bold' : 'normal'}}
            className={` ${activeTab === 'reviews' ? "border-b-2" : "border-b-0"} ${activeTab === 'reviews' ? "text-textSecondary" : "text-textGrey"} text-lg border-b-textSecondary pb-2 `}>
            Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('questionsandanswers')}>
          <Text
            style={{
              fontWeight:
                activeTab === 'questionsandanswers' ? 'bold' : 'normal',
            }}
            className={` ${activeTab === 'questionsandanswers' ? "border-b-2" : "border-b-0"} ${activeTab === 'questionsandanswers' ? "text-textSecondary" : "text-textGrey"} text-lg border-b-textSecondary pb-2 `}>
            Questions & answers
          </Text>
        </TouchableOpacity>
      </Box>
      {renderContent()}
    </Box>
  );
};

export default ReviewsAndQuestionsTab;

const styles = StyleSheet.create({});
