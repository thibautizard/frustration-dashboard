import styled from "styled-components"

const Loader = styled(({ className }) => {
  return (
    <div class={className}>
      <div class="loader">
        <div></div>
      </div>
    </div>
  )
})`

  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #f1f2f3;

@keyframes loader {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.45,0,0.9,0.55)
  }
  0% {
    transform: translate(0,0)
  }
  50% {
    transform: translate(0,108px);
    animation-timing-function: cubic-bezier(0,0.45,0.55,0.9);
  }
  100% {
    transform: translate(0,0);
  }
}

.loader div {
  position: absolute;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #1d0e0b;
  left: 74px;
  top: 20px;
  animation: loader 1s linear infinite;
}

.loader {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.loader div { box-sizing: content-box; }
`

export default Loader