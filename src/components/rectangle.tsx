 interface Color {
    name: string;
    value: string;
  }

const ColorRectangle: React.FC<{ colors: Color[] }> = ({ colors }) => {
    return (
       <div className="w-full">
         <div className="flex w-1/2 flex-row flex-wrap">
        {colors.map((color, index) => (
          <div key={index} className="px-5">
            <div
              className="border-2 h-20 w-52 rounded-lg mb-2"
              style={{ backgroundColor: `hsl(${color.value})` }}
            ></div>
            <p>{color.name}</p>
          </div>
        ))}
      </div>
       </div>
    );
  };
  
  export default ColorRectangle;