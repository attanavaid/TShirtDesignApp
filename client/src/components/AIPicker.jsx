import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImage, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <p className="text-red-500 text-xs">
        <strong>Note:</strong>&nbsp;This feature is deprecated as it requires payment.
      </p>
      
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
        className="aipicker-textarea"
      />

      <div className="flex flex-wrap gap-3">
        {generatingImage ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              customStyles="text-xs"
              handleClick={() => handleSubmit("logo")}
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              customStyles="text-xs"
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker;