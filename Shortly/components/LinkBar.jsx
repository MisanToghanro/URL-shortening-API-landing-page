import { shortenUrl } from "../src/services/api";
import { useState } from "react";

const LinkBar = () => {

    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [loading,setLoading] = useState(false);
    const [links, setLinks] = useState([]);
    const [copyLink, setCopyLink] = useState(null);


    const handleCopy = async(text, index) => {

        try {
            await navigator.clipboard.writeText(text);
            setCopyLink(index);

            setTimeout(() => {
                setCopyLink(null)
            },3000)
        } catch (error) {
            console.log("Copy failed");
        }

    }

const handleSubmit = async (event) => { // 1. Mark as async
    event.preventDefault();

    if (!url.trim()) {
        setError("Please add a link");
        return;
    }

    try {
        setError("");
        setLoading(true);

        // 2. Await the async function call
        const shortenedUrl = await shortenUrl(url);

        const newLink = {
            original: url,
            shortened: shortenedUrl
        };

        setLinks((prev) => [...prev, newLink]);
        setUrl(""); // Clear input on success
    } catch (err) {
        // 3. Set the error message 
        setError(err.message || "Something went wrong");
    } finally {
        setLoading(false);
    }
};

    return(
        <section className="container mx-auto">
    <form 
        onSubmit={handleSubmit}
        className="relative -mt-28 flex flex-col rounded-xl md:flex-row justify-center md:items-start gap-4 p-6 md:p-12 bg-purple bg-cover  bg-center"
        style={{backgroundImage: "url('/assets/images/bg-shorten-desktop.svg')"}}>
            

         <div className="flex-1">
         <input 
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={`w-full  py-4 px-4 rounded-md bg-white outline-none placeholder:text-gray-400 ${
                error ? "border-2 border-red placeholder:text-red" : ""
                }`}
            placeholder="Shorten a link here..."
            />

            {error && (
                    <p className="mt-2 text-sm italic text-red">{error}</p>
                )}
            </div>


            <button 
            type="submit"
            disabled={loading}
            className="bg-cyan text-white font-semibold rounded-md px-8 py-4 hover:opacity-80 ">
                {loading ? "Loading..." : "Shorten it!"}
            </button>

        </form>

        <div className="mt-6 space-y-4 bg-gray-50">
            {links.map((link,index) => (
<div
  key={index}
  className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md md:flex-row md:items-center md:justify-between"
>
  <p className="truncate text-gray-900">
    {link.original}
  </p>

  <div className="h-px bg-gray-200 md:hidden"></div>

  <div className="flex flex-col gap-3 md:flex-row md:items-center">
    <a
      href={link.shortened}
      target="_blank"
      rel="noreferrer"
      className="font-bold text-cyan"
    >
      {link.shortened}
    </a>

     <button
  onClick={() =>
    handleCopy(link.shortened, index)
  }
  className={`rounded-md px-6 py-2 font-bold text-white transition ${
    copyLink === index
      ? "bg-purple"
      : "bg-cyan hover:opacity-80"
  }`}
>
  {copyLink === index ? "Copied!" : "Copy"}
</button>
  </div>
</div>
            ))}
        </div>

        </section>

    )
}

export default LinkBar;