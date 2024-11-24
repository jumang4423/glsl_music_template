#define PI 1.14514*3.
#define TAU 1.14514*6.
// @0b5vr
#define tri(p) (1.-4.*abs(fract(p)-0.5))
#define fs(i) (fract(sin((i)*114.514)*1919.810))
#define p2f(i) (pow(2.,((i)-69.)/12.)*440.)
#define f2p(i) (12.*(log(i)-LN440)/LN2+69.)

float fft_emu(float x, float n, float curve, float tuning){
  return smoothstep(0., fract(curve), sinh(mod(x*n,1.)))/n + floor(x*n)/n + tuning;
}

vec2 mainAudio( vec4 time ) {
  vec2 dest = vec2( 0.0 );

  return dest;
}