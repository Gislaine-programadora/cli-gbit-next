import figlet from "figlet";
import gradient from "gradient-string";

export default function banner() {


    console.log(
        gradient.pastel.multiline(
            figlet.textSync("GBIT NEXT", {
                horizontalLayout: "default"
            })
        )
    );

    console.log(
        gradient.atlas(
            "\nCreate Modern Next.js Applications\n"
        )
    );

}