import { RadioGroup } from "@/components/ui/radio";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import React, { useState } from "react";
import RatingsItem from "../RatingsItem";
import { FiveStar } from "@/assets/svg/FiveStar";
import { OneStar } from "@/assets/svg/OneStar";
import { TwoStar } from "@/assets/svg/TwoStar";
import { ThreeStar } from "@/assets/svg/ThreeStar";
import { FourStar } from "@/assets/svg/FourStar";

const FilterByRating = () => {
  const [rating, setRating] = useState(5);
  const [active, setActive] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const handleRating = (value) => {
    setRating(value);
  };

  const items = [
    { id: "1", count: 5, value: <FiveStar color={active && "$primary"} /> },
    { id: "2", count: 4, value: <FourStar color={active && "$primary"} /> },
    { id: "3", count: 3, value: <ThreeStar color={active && "$primary"} /> },
    { id: "4", count: 2, value: <TwoStar color={active && "$primary"} /> },
    { id: "5", count: 1, value: <OneStar color={active && "$primary"} /> },
  ];

  return (
    <Box className="bg-secondary mx-4 flex-row rounded-md mt-2 py-5">
      <Box className="w-full">
        <VStack className="gap-1.5 w-full px-4">
          <RadioGroup>
            {items.map((item, i) => {
              return (
                <Box>
                  <RatingsItem stars={item} index={i} />
                  {i !== 2 && <Divider className="w-full bg-secondary-600" />}
                </Box>
              );
            })}
          </RadioGroup>
        </VStack>
      </Box>
    </Box>
  );
};

export default FilterByRating;
