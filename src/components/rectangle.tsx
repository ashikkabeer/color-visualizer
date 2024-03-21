 interface Color {
    name: string;
    value: string;
  }

const ColorRectangle: React.FC<{ colors: Color[] }> = ({ colors }) => {
    return (
        <div className="flex w-full flex-wrap">
        {colors.map((color, index) => (
          <div key={index} className="px-5">
            <div
              className="border-2 h-20 w-30 rounded-lg mb-2"
              style={{ backgroundColor: color.value }}
            ></div>
            <p>{color.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ColorRectangle;