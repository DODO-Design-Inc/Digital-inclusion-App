import { useState } from "react";
import Image from "next/image";

const DownloadPdf = ({
    downloadUrl = "/pdfs/common-mistakes-in-african-fintech-and-how-to-prevent-them.pdf",
    downloadFilename = "common-mistakes-in-african-fintech-and-how-to-prevent-them.pdf",
}) => {

     const [downloaded, setDownloaded] = useState(false)
        const [loading, setLoading] = useState(false)
        const [downloadEmail, setDownloadEmail] = useState("")
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        const onChangeDownloadEmail = (e) => {
            setDownloaded(false);
            setDownloadEmail(e.target.value)
        }

    const onClickDownload = async (e) => {
        e.preventDefault();
        setLoading(true)
        if(!downloadEmail){
            setLoading(false)
        }
         else if(!emailRegex.test(downloadEmail)){
            setLoading(false)
        }
        else{
             const response = await fetch('/api/download500pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email : downloadEmail})
        });
            console.log(response)
            let responseData = await response.json()

            console.log(responseData)

            // if (responseData.status) {
                setLoading(false)
                //Trigger file download from /public
                const link = document.createElement("a");
                link.href = downloadUrl;
                link.download = downloadFilename;
                document.body.appendChild(link);
                link.click();
                link.remove();
                setDownloadEmail("")  
                setDownloaded(true)
            // }
            // else{
            //     setLoading(false)
            //     toast.error(responseData.message);
            //  }
    } 
    } 

    return(
        <form className="flex flex-col sm:flex-row gap-[5px] sm:gap-0 z-50 w-full" onSubmit={onClickDownload}>
        <input
        required 
        type="email" 
        name="email"
        value={downloadEmail}
        onChange={onChangeDownloadEmail} 
        placeholder="Enter address" 
        className="px-[16px] z-[500] outline-none w-full sm:w-[280px] h-[48px] border border-[#FEF7EA] text-[16px] leading-[125%] tracking-[-3%] !placeholder-[#FEF7EA] text-[#FEF7EA]" 
        />
        <button disabled={downloaded || loading} className="!text-[#1D2328] flex justify-center items-center cursor-pointer w-full sm:w-[200px] h-[48px] bg-[#FEF7EA] text-[16px] leading-[125%] tracking-[-3%]">
            {loading ? <div className="h-7 w-7 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div> :  <div className="w-full h-full flex justify-center gap-[10px] items-center">
            {downloaded ? <span>Downloaded!</span> : <span> Download PDF</span>}
            {
                downloaded ? <div className="w-[15px] h-[9px] relative shrink-0">
                    <Image src="/Images/check.png" fill alt="dodo-digital-inclusion" />
                    </div>:<div className="w-[16px] h-[16px] relative shrink-0">
                    <Image src="/Images/download_btn.png" fill alt="dodo-digital-inclusion" />
                    </div>
            }
            </div>} 
        </button>
    </form>
    )
}

export default DownloadPdf;