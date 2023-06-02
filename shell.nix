{ 
  pkgs ? (let 
    nixpkgs = builtins.fetchTarball({
      url = "https://github.com/nixos/nixpkgs/archive/8e3fad82be64c06fbfb9fd43993aec9ef4623936.tar.gz";
      sha256 = "0x4yzsrrzq2q1ah77yydjg35niirx7yxvpzdryfnw0cr5bkszd3d";
    }); in
      import nixpkgs {}
  )
}:

pkgs.mkShell {
  name = "backend-test";
  buildInputs = with pkgs; [
    nodejs
  ];
}
