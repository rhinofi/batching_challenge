{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "backend-test";
  buildInputs = with pkgs; [
    nodejs
  ];
}
