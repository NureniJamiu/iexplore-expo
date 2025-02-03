import LinearGradient from "react-native-linear-gradient";

const CustomLinearGradient = ({ colors, className, ...props }) => {
  // Resolve colors dynamically here if needed
  const resolvedColors = colors.map((color) => color); // Apply resolver logic if necessary

  return (
    <LinearGradient
      colors={resolvedColors}
      className={className} // Apply Tailwind classes
      {...props}
    />
  );
};

export default CustomLinearGradient;
