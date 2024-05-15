
import { characters } from "../data/data.ts";
import "../styles/Characters.css";

export const Characters: React.FC = () => (
  <article className="flex flex-col items-center w-full">
    <img src="./assets/logo.svg" alt="Logo" />
    <div className="grid md:grid-cols-5 md:gap-5 md:m-12 sm:grid-cols-3 sm:gap-4 sm:m-8">
      {characters.map((character, index) => (
        <div key={index}>
            <div className="flex flex-col w-full h-[55vh] justify-center items-center border-2 rounded-xl backdrop-blur-lg">
              <img
                className="h-[50vh] object-cover py-2"
                src={`./assets/characters/${character.characterName}.webp`}
                alt={character.characterName}
                style={{
                  filter: `drop-shadow(.1px .1px 3px ${character.colorCode})`,
                }}
              />

              <h3 className="flex text-purple-400 text-lg bg-black/50 w-full font-medium bottom-0 justify-center">
                {character.characterName}
              </h3>
            </div>
        </div>
      ))}
    </div>
  </article>
);