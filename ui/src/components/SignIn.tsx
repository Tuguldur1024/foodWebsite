const SignIn = async () => {
  await axios
    .post(`${process.env.NEXT_PUBLIC_MONGODB_URI}/users/signin`, {
      email: email,
      password: password,
    })
    .then((response) => {
      signin(response.data.user._id);
      router.push("/");
    })
    .catch(() => {
      toast({
        title: "Алдаа гарлаа!",
        description: "Таны хүсэлтийг боловсруулах явцад алдаа гарлаа.",
      });
    });
};
export default SignIn;
