import { h } from "preact";
import { useState } from "preact/hooks";
interface Props {
  messages: string[];
}

export default function Greeting(props: Props) {
  const { messages } = props;

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div class="">
      <h6 class="text-stone-400 text-xs font-medium text-center">{greeting}</h6>
    </div>
  );
}
