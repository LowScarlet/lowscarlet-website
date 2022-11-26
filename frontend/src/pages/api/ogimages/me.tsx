/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="256"
          height="256"
          src={`https://github.com/LowScarlet.png`}
          style={{
            borderRadius: 128,
          }}
        />
        <h1 style={{margin: 0}}>Low_Scarlet</h1>
        <p>Hi 👋, Im Low_Scarlet a full stack website developer from Indonesia</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}