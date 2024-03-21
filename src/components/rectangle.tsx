export default function ColorRectangle ({ colors }) {
    return (
      <div className="flex flex-wrap">
        {colors.map((color, index) => (
          <div key={index} className="w-1/3 p-2">
            <div className="h-20 rounded-lg mb-2" style={{ backgroundColor: color.value }}></div>
            <p>{color.name}</p>
          </div>
        ))}
      </div>
    );
  };
  