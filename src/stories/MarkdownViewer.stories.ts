import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownViewer } from "../components";
import YugaTerms from "./templates/yuga.json";
import OverpassTerms from "./templates/overpass.json";
import { Term } from "../components/markdown-viewer/MarkdownViewer";

const terms = OverpassTerms as Term[];

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/markdownViewer",
  component: MarkdownViewer,
  tags: ["autodocs"],
  argTypes: {
    dynamicData: { control: "text" },
  },
} satisfies Meta<typeof MarkdownViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    terms: terms,
    dynamicData: '{"OFFERER":"John Doe","TOKEN_ID":"11"}',
  },
};

// integration example
// <MarkdownViewer
// style={{ color: "white" }}
// terms={[
//   "**TRADEMARK LICENSE** \n \n >",
//   '> WHEREAS, Licensor owns the below mark [**or\n marks**] ("**the Mark(s)**") and Licensee wants to license\n **[its/their]** use as follows and for no other use or purpose:\n \n > -   **Licensed Mark(s):** BAYC Community Logo\n \n > -   **Licensee\'s Use:** **${USE_CASE}**\n \n > -   **Licensed Activities:**\n   **${USE_CASE_DESCRIPTION}**;\n \n > -   **Territory: [Insert locations for Licensed\n Activities]**\n \n',
//   "> NOW THEREFORE, in consideration of the promises and the mutual covenants\n herein contained, and for other good and valuable consideration, the\n sufficiency of which is hereby acknowledged, the parties agree as follows:\n \n > - **License.** Licensor grants Licensee a limited, non-exclusive, non-transferable, non-sublicensable, non-assignable, revocable, royalty-free License to use the Mark(s) solely in connection with the Licensed Activities in the Territory, and for no other purpose. Licensee agrees that it will not register or try to register the Mark or any other trademarks owned by Licensor (\"Licensor's Trademarks\") or the Licensee's Use, in either case in whole or in part, or any trademark incorporating the Mark(s) or the Licensee's Use, in each case in whole or in part, anywhere.\n \n > - **Quality Control**. Licensee agrees that its use of the Mark(s) and/or the Licensee's Use will be consistent with Licensor's quality standards and brand usage guidelines established from time to time, and in compliance with all applicable laws and regulations. If Licensor notifies Licensee that Licensee's use of the Mark(s) or the Licensee's Use fall[s] below Licensor's standards, Licensee will fix the problem to Licensor's satisfaction within thirty (30) days of notice. \n \n",

//   '**TRADEMARK LICENSE**\n\n > This license ( "**License**"), effective as of the last date signed\n below (the "**Effective Date**"), is made by and between Yuga Labs,\n Inc., a Delaware corporation with a principal place of business at 1430\n S. Dixie Hwy, Suite 105 1075, Coral Gables, FL USA 33146 ("**Licensor**")\n and **${OFFERER}**, a **BAYC NFT HOLDER** ("**Licensee**").\n\n >',
//   'WHEREAS, Licensor owns the below mark [**or\n marks**] ("**the Mark(s)**") and Licensee wants to license\n **[its/their]** use as follows and for no other use or purpose:\n \n > -   **Licensed Mark(s):** BAYC Community Logo\n \n > -   **Licensee\'s Use:** **${USE_CASE}**\n \n > -   **Licensed Activities:**\n   **${USE_CASE_DESCRIPTION}**;\n \n > -   **Territory: [Insert locations for Licensed\n Activities]**\n \n',
//   "> NOW THEREFORE, in consideration of the promises and the mutual covenants\n herein contained, and for other good and valuable consideration, the\n sufficiency of which is hereby acknowledged, the parties agree as follows:\n \n > - **License.** Licensor grants Licensee a limited, non-exclusive, non-transferable, non-sublicensable, non-assignable, revocable, royalty-free License to use the Mark(s) solely in connection with the Licensed Activities in the Territory, and for no other purpose. Licensee agrees that it will not register or try to register the Mark or any other trademarks owned by Licensor (\"Licensor's Trademarks\") or the Licensee's Use, in either case in whole or in part, or any trademark incorporating the Mark(s) or the Licensee's Use, in each case in whole or in part, anywhere.\n \n > - **Quality Control**. Licensee agrees that its use of the Mark(s) and/or the Licensee's Use will be consistent with Licensor's quality standards and brand usage guidelines established from time to time, and in compliance with all applicable laws and regulations. If Licensor notifies Licensee that Licensee's use of the Mark(s) or the Licensee's Use fall[s] below Licensor's standards, Licensee will fix the problem to Licensor's satisfaction within thirty (30) days of notice. \n \n",
// ]}
// dynamicData='{"OFFERER":"0x5e230FED487c86B90f6508104149F087d9B1B0A7","USE_CASE":"Sell t-shirt","USE_CASE_DESCRIPTION":"Sell t-shirts with my ape picture on it","ONCHAIN_OFFERER_SIGNATURE":"0x3216e290e972a7b3db0639b19fc7c8a894ee31bfaee273071d4f960e87be702e030cfe4cb478bea9b458035b7f45b6da784bd51cba66529f5f211fc193b8937f1c","TOKEN_ID":"14"}'
// />
