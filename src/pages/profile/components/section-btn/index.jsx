import { Button, Center, Text } from "@mantine/core"

export const SectionBtn = ({ icon, title = '', w = '100%' }) => {
  return (
    <Button variant="default" styles={{
      root: {
        padding: '15px',
        height: 'auto',
        width: w,
        background: 'white',
        border: 'none',
        borderRadius: '25px',
        boxShadow: `0 0 5px -15px rgba(0,0,0,0.2)`
      },
      inner: {
        padding: 0,
      },
      label : {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%'
      }
    }}>
      {!!icon && <Center style={{borderRadius: '50%', height: '25px', width: '25px', background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%)` }}>
        {icon}
      </Center>}
      <Text 
        mt="5px" 
        fw="700" 
        mb={!icon && "10px"}
        style={{ 
          background: "-webkit-linear-gradient(0deg, rgba(252,176,69,1) 18%, rgba(253,29,29,1) 44%, rgba(131,58,180,1) 69%)",
          'WebkitBackgroundClip': "text",
          'WebkitTextFillColor': "transparent",
         }} 
      >
        {title}
        </Text>

    </Button>
  )
}
