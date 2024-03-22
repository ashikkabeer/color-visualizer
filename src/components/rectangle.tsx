interface Color {
  name: string;
  value: string;
}

const ColorRectangle: React.FC<{ colors: Color[] }> = ({ colors }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {colors.map((color, index) => (
        <div key={index} className="px-2 mb-5">
          <div
            className="border-2 h-20 w-52 rounded-lg mb-2"
            style={{ backgroundColor: `hsl(${color.value})` }}
          ></div>
          <p className="flex justify-center font-semibold">{color.name.substring(3)}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorRectangle;
