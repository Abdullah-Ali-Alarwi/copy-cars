
export default function Side() {
const list=[
  "My Account",
  "Recommended cars",
  "My garage",
  "Email notifications",
  "Recently viewed cars",
  "Logout"];

  return (
    <div className='bg-[#f1f7f8]  rounded p-[30px] w-[291px] h-[365px]'>

        {list.map((link) => (
            <div key={link}>
                <p className='mb-2 text-[16px]'>{link}</p>
            </div>
        ))}
      
    </div>
  )
}
