import LanguageSwitcher from "./LanguageSzitcher"
import {useState} from "react";

export default function Page(){
    const [currentLang, setCurrentLang] = useState('ES')
    const displayMessage = () => {
        switch (currentLang) {
            case 'AR': return 'السلام عليكم'
            case 'FR': return 'Bonjour'
            case 'EN': return 'Hello'
            case 'ES': return 'Hola'
        }
    }
    return<>
      <LanguageSwitcher onLanguageChange={value => setCurrentLang(value)} />
      <hr/>
        Current Language: 
        <hr/>
        <div className="alert alert-primary" role="alert">
            <strong>{displayMessage()}</strong>
        </div>
    
    </>
}